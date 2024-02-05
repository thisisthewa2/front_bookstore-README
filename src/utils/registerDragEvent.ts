import React from 'react';

const isTouchScreen =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none) and (pointer: coarse)').matches;

function registDragEvent({
  onDragChange,
  onDragEnd,
}: {
  onDragChange?: (x: number, y: number) => void;
  onDragEnd?: (x: number, y: number) => void;
}) {
  if (isTouchScreen) {
    return {
      onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => {
        const touchMoveHandler = (moveEvent: TouchEvent) => {
          if (moveEvent.cancelable) {
            moveEvent.preventDefault();
          }
          const deltaX =
            moveEvent.touches[0].pageX - touchEvent.touches[0].pageX;
          const deltaY =
            moveEvent.touches[0].pageY - touchEvent.touches[0].pageY;
          onDragChange?.(deltaX, deltaY);
        };

        const touchEndHandler = (moveEvent: TouchEvent) => {
          const deltaX =
            moveEvent.changedTouches[0].pageX -
            touchEvent.changedTouches[0].pageX;
          const deltaY =
            moveEvent.changedTouches[0].pageY -
            touchEvent.changedTouches[0].pageY;
          onDragEnd?.(deltaX, deltaY);
          document.removeEventListener('touchmove', touchMoveHandler);
        };

        document.addEventListener('touchmove', touchMoveHandler, {
          passive: false,
        });
        document.addEventListener('touchend', touchEndHandler, { once: true });
      },
    };
  }

  return {
    onMouseDown: (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
      const mouseMoveHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        onDragChange?.(deltaX, deltaY);
      };

      const mouseUpHandler = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.pageX - clickEvent.pageX;
        const deltaY = moveEvent.pageY - clickEvent.pageY;
        onDragEnd?.(deltaX, deltaY);
        document.removeEventListener('mousemove', mouseMoveHandler);
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler, { once: true });
    },
  };
}

export default registDragEvent;
