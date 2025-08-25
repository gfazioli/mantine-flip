#!/usr/bin/env bash

# 🔍 Git Commit Analysis & Changelog Generator
# This script analyzes unpushed commits and generates changelog entries

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print colored output
print_colored() {
    printf "${!1}%s${NC}\n" "$2"
}

print_colored "CYAN" "🔍 Mantine Flip - Commit Analysis & Changelog Generator"
print_colored "CYAN" "=================================================="

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_colored "RED" "❌ Error: Not a git repository"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
print_colored "BLUE" "📍 Current branch: $CURRENT_BRANCH"

# Check for remote branch
REMOTE_BRANCH="origin/$CURRENT_BRANCH"
if git show-ref --verify --quiet refs/remotes/$REMOTE_BRANCH; then
    print_colored "GREEN" "✅ Remote branch exists: $REMOTE_BRANCH"
    
    # Get unpushed commits
    UNPUSHED_COMMITS=$(git log --oneline $REMOTE_BRANCH..HEAD)
    
    if [ -z "$UNPUSHED_COMMITS" ]; then
        print_colored "YELLOW" "ℹ️  No unpushed commits found"
    else
        print_colored "PURPLE" "📦 Unpushed commits:"
        echo "$UNPUSHED_COMMITS" | while read line; do
            print_colored "YELLOW" "  • $line"
        done
    fi
else
    print_colored "YELLOW" "⚠️  Remote branch not found, checking against main/master"
    
    # Try to find main or master branch
    if git show-ref --verify --quiet refs/remotes/origin/main; then
        BASE_BRANCH="origin/main"
    elif git show-ref --verify --quiet refs/remotes/origin/master; then
        BASE_BRANCH="origin/master"
    else
        print_colored "RED" "❌ Could not find base branch (main/master)"
        exit 1
    fi
    
    print_colored "BLUE" "📍 Using base branch: $BASE_BRANCH"
    UNPUSHED_COMMITS=$(git log --oneline $BASE_BRANCH..HEAD)
    
    if [ -z "$UNPUSHED_COMMITS" ]; then
        print_colored "YELLOW" "ℹ️  No commits ahead of $BASE_BRANCH"
    else
        print_colored "PURPLE" "📦 Commits ahead of $BASE_BRANCH:"
        echo "$UNPUSHED_COMMITS" | while read line; do
            print_colored "YELLOW" "  • $line"
        done
    fi
fi

echo ""
print_colored "CYAN" "📋 File Changes Analysis"
print_colored "CYAN" "========================"

# Get the base commit for comparison
if git show-ref --verify --quiet refs/remotes/$REMOTE_BRANCH; then
    BASE_COMMIT=$REMOTE_BRANCH
else
    BASE_COMMIT=$BASE_BRANCH
fi

# Get changed files
CHANGED_FILES=$(git diff --name-status $BASE_COMMIT..HEAD)

if [ -z "$CHANGED_FILES" ]; then
    print_colored "YELLOW" "ℹ️  No file changes detected"
else
    print_colored "GREEN" "📁 Changed files:"
    echo "$CHANGED_FILES" | while read status file; do
        case $status in
            A) print_colored "GREEN" "  ➕ Added: $file" ;;
            M) print_colored "YELLOW" "  ✏️  Modified: $file" ;;
            D) print_colored "RED" "  ❌ Deleted: $file" ;;
            R*) print_colored "BLUE" "  ↔️  Renamed: $file" ;;
            *) print_colored "PURPLE" "  🔄 $status: $file" ;;
        esac
    done
    
    # Generate changelog suggestions based on file changes
    echo ""
    print_colored "CYAN" "📝 Suggested Changelog Entries"
    print_colored "CYAN" "==============================="
    
    echo "$CHANGED_FILES" | while read status file; do
        case $file in
            *.md)
                if [[ $status == "M" ]]; then
                    print_colored "BLUE" "📚 Documentation: Update $file"
                elif [[ $status == "A" ]]; then
                    print_colored "BLUE" "📚 Documentation: Add $file"
                fi
                ;;
            package*.json)
                print_colored "PURPLE" "📦 Dependencies: Update package configuration"
                ;;
            *.ts|*.tsx|*.js|*.jsx)
                if [[ $file == *"test"* ]] || [[ $file == *"spec"* ]]; then
                    print_colored "GREEN" "🧪 Tests: Update test files"
                else
                    print_colored "YELLOW" "✨ Code: Update $file"
                fi
                ;;
            *.css|*.scss|*.less)
                print_colored "CYAN" "🎨 Styles: Update styling"
                ;;
            *.json)
                print_colored "PURPLE" "🔧 Config: Update configuration"
                ;;
            *)
                print_colored "YELLOW" "🔄 Other: Update $file"
                ;;
        esac
    done
fi

echo ""
print_colored "CYAN" "🎯 GitMoji Commit Message Suggestions"
print_colored "CYAN" "====================================="

# Analyze commit messages and suggest improvements
if [ ! -z "$UNPUSHED_COMMITS" ]; then
    echo "$UNPUSHED_COMMITS" | while read commit_line; do
        commit_hash=$(echo $commit_line | cut -d' ' -f1)
        commit_msg=$(echo $commit_line | cut -d' ' -f2-)
        
        print_colored "YELLOW" "Original: $commit_msg"
        
        # Suggest GitMoji based on commit message content
        case $commit_msg in
            *"fix"*|*"bug"*|*"issue"*)
                print_colored "GREEN" "Suggested: 🐛 fix: $commit_msg"
                ;;
            *"add"*|*"new"*|*"feature"*)
                print_colored "GREEN" "Suggested: ✨ feat: $commit_msg"
                ;;
            *"doc"*|*"readme"*)
                print_colored "GREEN" "Suggested: 📝 docs: $commit_msg"
                ;;
            *"test"*)
                print_colored "GREEN" "Suggested: ✅ test: $commit_msg"
                ;;
            *"refactor"*)
                print_colored "GREEN" "Suggested: ♻️ refactor: $commit_msg"
                ;;
            *"perf"*|*"performance"*)
                print_colored "GREEN" "Suggested: ⚡️ perf: $commit_msg"
                ;;
            *"style"*|*"format"*)
                print_colored "GREEN" "Suggested: 🎨 style: $commit_msg"
                ;;
            *"config"*|*"setup"*)
                print_colored "GREEN" "Suggested: 🔧 config: $commit_msg"
                ;;
            *)
                print_colored "GREEN" "Suggested: 📝 chore: $commit_msg"
                ;;
        esac
        echo ""
    done
else
    print_colored "YELLOW" "No commits to analyze for GitMoji suggestions"
fi

echo ""
print_colored "CYAN" "🏁 Analysis Complete!"
print_colored "GREEN" "💡 Tip: Use 'git log --oneline -n 10' to see recent commits"
print_colored "GREEN" "💡 Tip: Use 'git diff --stat' to see file change statistics"