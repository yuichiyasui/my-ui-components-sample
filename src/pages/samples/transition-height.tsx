import { Button } from '@/components/ui/Button';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

type Item = {
  id: number;
  name: string;
};

const TransitionHeightPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [height, setHeight] = useState<'auto' | number>('auto');
  const itemListRef = useRef<HTMLUListElement | null>(null);

  const addItem = () => {
    const id = items.length + 1;
    setItems([...items, { id, name: `アイテム${id}` }]);
  };

  const removeItem = () => {
    if (items.length < 2) {
      return setItems([]);
    }
    const remainingItems = items.slice(0, items.length - 1);
    setItems(remainingItems);
  };

  useEffect(() => {
    const element = itemListRef.current;
    if (!element) return;
    setHeight(element.getBoundingClientRect().height);
  }, [items]);

  return (
    <>
      <Head>
        <title>Transition Height</title>
      </Head>

      <main className="p-10">
        <section>
          <h1 className="mb-8 text-3xl">Transition Height</h1>
          <div className="flex gap-x-2 mb-4">
            <Button
              type="button"
              onClick={addItem}
              className="bg-green-500 text-white"
            >
              追加
            </Button>
            <Button
              type="button"
              onClick={removeItem}
              className="bg-blue-500 text-white"
            >
              削除
            </Button>
          </div>
          <div
            style={{ height: height === 'auto' ? height : `${height}px` }}
            className="border border-gray-500 transition-height max-h-[80vh] duration-1000 overflow-y-scroll"
          >
            <ul ref={itemListRef} className="flex flex-col p-4">
              {items.length === 0 && (
                <p className="p-2">アイテムを追加してください</p>
              )}
              {items.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="odd:bg-blue-100/80 even:bg-blue-100/30 px-2 py-10"
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default TransitionHeightPage;
