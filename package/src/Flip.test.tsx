import React from 'react';
import { Button } from '@mantine/core';
import { render, screen, userEvent } from '@mantine-tests/core';
import { Flip } from './Flip';

describe('Flip', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Flip>
        <div>
          Pane 1
          <Flip.Target>
            <Button>Flip Back</Button>
          </Flip.Target>
        </div>
        <div>Pane 2</div>
      </Flip>
    );
    expect(container).toBeTruthy();
  });

  it('renders compound components (Flip.Front / Flip.Back)', () => {
    const { container } = render(
      <Flip>
        <Flip.Front>
          <div>Front</div>
        </Flip.Front>
        <Flip.Back>
          <div>Back</div>
        </Flip.Back>
      </Flip>
    );
    expect(container.textContent).toContain('Front');
  });

  it('throws when compound mode has only Flip.Front', () => {
    expect(() =>
      render(
        <Flip>
          <Flip.Front>
            <div>Front</div>
          </Flip.Front>
        </Flip>
      )
    ).toThrow('Flip component requires both Flip.Front and Flip.Back');
  });

  it('throws when compound mode has extra children', () => {
    expect(() =>
      render(
        <Flip>
          <Flip.Front>
            <div>Front</div>
          </Flip.Front>
          <Flip.Back>
            <div>Back</div>
          </Flip.Back>
          <div>Extra</div>
        </Flip>
      )
    ).toThrow('no extra elements allowed');
  });

  it('throws when non-compound mode has wrong number of children', () => {
    expect(() =>
      render(
        <Flip>
          <div>Only one</div>
        </Flip>
      )
    ).toThrow('Flip component must have exactly two children');
  });

  it('disabled prevents toggling via Flip.Target', async () => {
    const onChange = jest.fn();
    render(
      <Flip disabled onChange={onChange}>
        <div>
          Front
          <Flip.Target>
            <button type="button">Toggle</button>
          </Flip.Target>
        </div>
        <div>Back</div>
      </Flip>
    );

    await userEvent.click(screen.getByText('Toggle'));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Flip.Target toggles flip state when not disabled', async () => {
    const onChange = jest.fn();
    render(
      <Flip onChange={onChange}>
        <div>
          Front
          <Flip.Target>
            <button type="button">Toggle</button>
          </Flip.Target>
        </div>
        <div>Back</div>
      </Flip>
    );

    await userEvent.click(screen.getByText('Toggle'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('Flip.Target renders aria-disabled when disabled', () => {
    render(
      <Flip disabled>
        <div>
          Front
          <Flip.Target>
            <button type="button">Toggle</button>
          </Flip.Target>
        </div>
        <div>Back</div>
      </Flip>
    );

    expect(screen.getByText('Toggle')).toHaveAttribute('aria-disabled', 'true');
  });

  it('lazyBack does not render back face initially', () => {
    render(
      <Flip lazyBack>
        <div>Front</div>
        <div>Back Content</div>
      </Flip>
    );

    expect(screen.queryByText('Back Content')).not.toBeInTheDocument();
  });

  it('lazyBack renders back face when controlled flipped={true}', () => {
    render(
      <Flip lazyBack flipped>
        <div>Front</div>
        <div>Back Content</div>
      </Flip>
    );

    expect(screen.getByText('Back Content')).toBeInTheDocument();
  });

  it('defaultFlipped shows back face initially', () => {
    render(
      <Flip defaultFlipped>
        <div>Front</div>
        <div>Back Content</div>
      </Flip>
    );

    expect(screen.getByText('Back Content')).toBeInTheDocument();
  });

  it('calls onBack when flipping to back', async () => {
    const onBack = jest.fn();
    render(
      <Flip onBack={onBack}>
        <div>
          Front
          <Flip.Target>
            <button type="button">Toggle</button>
          </Flip.Target>
        </div>
        <div>Back</div>
      </Flip>
    );

    await userEvent.click(screen.getByText('Toggle'));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('calls onFront when flipping back to front', async () => {
    const onFront = jest.fn();
    render(
      <Flip defaultFlipped onFront={onFront}>
        <div>Front</div>
        <div>
          Back
          <Flip.Target>
            <button type="button">Toggle</button>
          </Flip.Target>
        </div>
      </Flip>
    );

    await userEvent.click(screen.getByText('Toggle'));
    expect(onFront).toHaveBeenCalledTimes(1);
  });

  it('root element has aria-live="polite"', () => {
    const { container } = render(
      <Flip>
        <div>Front</div>
        <div>Back</div>
      </Flip>
    );

    expect(container.querySelector('[aria-live="polite"]')).toBeInTheDocument();
  });

  it('back face is inert by default and front face is not', () => {
    const { container } = render(
      <Flip>
        <div>Front</div>
        <div>Back</div>
      </Flip>
    );

    const frontFace = container.querySelector('[class*="flip-front-face"]');
    const backFace = container.querySelector('[class*="flip-back-face"]');
    expect(frontFace).not.toHaveAttribute('inert');
    expect(backFace).toHaveAttribute('inert');
  });

  it('onTransitionEnd fires on transform transition end', () => {
    const onTransitionEnd = jest.fn();
    const { container } = render(
      <Flip onTransitionEnd={onTransitionEnd}>
        <div>Front</div>
        <div>Back</div>
      </Flip>
    );

    const flipContainer = container.querySelector('[class*="flip-container"]');
    if (flipContainer) {
      const event = new Event('transitionend', { bubbles: true });
      Object.defineProperty(event, 'propertyName', { value: 'transform' });
      flipContainer.dispatchEvent(event);
    }
    expect(onTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('onTransitionEnd does not fire for non-transform transitions', () => {
    const onTransitionEnd = jest.fn();
    const { container } = render(
      <Flip onTransitionEnd={onTransitionEnd}>
        <div>Front</div>
        <div>Back</div>
      </Flip>
    );

    const flipContainer = container.querySelector('[class*="flip-container"]');
    if (flipContainer) {
      const event = new Event('transitionend', { bubbles: true });
      Object.defineProperty(event, 'propertyName', { value: 'opacity' });
      flipContainer.dispatchEvent(event);
    }
    expect(onTransitionEnd).not.toHaveBeenCalled();
  });
});
