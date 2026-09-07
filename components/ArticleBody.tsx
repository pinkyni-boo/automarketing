import type { ReactNode } from 'react';

// Render nhẹ nhàng các dòng content[] dạng markdown-lite: "## " -> h2, "- " -> bullet, "> " -> blockquote, còn lại -> p.
export default function ArticleBody({ content }: { content: string[] }) {
  const blocks: ReactNode[] = [];
  let list: string[] = [];

  const flushList = (key: string) => {
    if (list.length) {
      blocks.push(
        <ul key={key}>
          {list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  content.forEach((line, i) => {
    if (line.startsWith('- ')) {
      list.push(line.slice(2));
      return;
    }
    flushList(`ul-${i}`);
    if (line.startsWith('## ')) blocks.push(<h2 key={i}>{line.slice(3)}</h2>);
    else if (line.startsWith('> ')) blocks.push(<blockquote key={i}>{line.slice(2)}</blockquote>);
    else blocks.push(<p key={i}>{line}</p>);
  });
  flushList('ul-end');

  return <>{blocks}</>;
}
