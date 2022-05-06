const sections = [
  {
    id: 'section1',
    title: 'セクション1',
  },
  {
    id: 'section2',
    title: 'セクション2',
  },
  {
    id: 'section3',
    title: 'セクション3',
  },
  {
    id: 'section4',
    title: 'セクション4',
  },
  {
    id: 'section5',
    title: 'セクション5',
  },
] as const;

export const ScrollSpyPage = (): JSX.Element => {
  return (
    <>
      <nav>
        <ol>
          {sections.map((section) => {
            return <li key={section.id}>セクション1</li>;
          })}
        </ol>
      </nav>

      <div>
        {sections.map((section, i) => {
          return (
            <section
              id={section.id}
              className="nth3n+1:bg-red-500 nth3n+2:bg-yellow-500 nth3n:bg-blue-500"
            >
              <h2>{section.title}</h2>
            </section>
          );
        })}
      </div>
    </>
  );
};
