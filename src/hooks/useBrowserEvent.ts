import { useEffect, useRef } from "react";

const useBrowserEvent = (eventType: string, eventListener: any) => {
  // 항상 최신의 상태를 봐야 한다 => current
  const eventListenerRef = useRef<any>();
  eventListenerRef.current = eventListener;
  useEffect(() => {
    // 외부 함수로 둘러싸 callback 호출시 최신의 current 를 호출하게
    const listenerRef = (e: any) => eventListenerRef.current(e);
    window.addEventListener(eventType, listenerRef);
    return () => {
      window.removeEventListener(eventType, listenerRef);
    };
  }, [eventType]);
};

export default useBrowserEvent;
