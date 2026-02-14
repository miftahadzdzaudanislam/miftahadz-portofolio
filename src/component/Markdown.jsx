import Markdown from "react-markdown";
import { Link } from "react-router-dom";

export default function ProjectMarkdown({ content }) {
  return (
    <>
      <Markdown
        components={{
          pre: ({ children }) => (
            <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-xl overflow-x-auto whitespace-pre-wrap wrap-break-words break-all">
              {children}
            </pre>
          ),
          code: ({ inline, children }) =>
            inline ? (
              <code className="bg-zinc-200 px-1 rounded">{children}</code>
            ) : (
              <code>{children}</code>
            ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside">{children}</ol>
          ),
          li: ({ children }) => <li className="mb-2">{children}</li>,
          h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
          hr: () => <hr className="my-6 border-t-2 border-gray-300" />,
          blockquote: ({ children }) => (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded">
              <div className="text-blue-800">{children}</div>
            </div>
          ),
          a: ({ href, children }) => (
            <Link
              to={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              {children}
            </Link>
          ),
        }}
      >
        {content}
      </Markdown>
    </>
  );
}
