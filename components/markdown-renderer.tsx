import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import readingTime from "reading-time";
import matter from "gray-matter";
import { Clock } from "lucide-react";

interface MarkdownRendererProps {
  content: string;
}

export interface Metadata {
  title?: string;
  layout?: string;
  toc?: boolean;
  toc_sticky?: boolean;
  author?: string;
  excerpt?: string;
  [key: string]: unknown;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { data, content: markdownContent } = matter(content);
  const metadata: Metadata = data;
  const stats = readingTime(markdownContent);

  return (
    <div className="mx-auto max-w-4xl rounded-lg p-4 shadow-lg md:p-6">
      <div className="mb-4 md:mb-6">
        {metadata.title && <h1 className="mb-3 text-2xl font-black text-white md:mb-4 md:text-5xl">{metadata.title}</h1>}
        <div className="flex items-center gap-2 text-sm text-gray-400 md:text-base">
          <Clock size={16} />
          <span>{Math.ceil(stats.minutes)} minute read</span>
        </div>
      </div>
      <div className="flex">
        <div className="prose prose-github prose-invert max-w-none w-full">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, rehypeRaw, [rehypeAutolinkHeadings, { behavior: "wrap" }]]}
            components={{
              pre({ children, ...props }) {
                return (
                  <pre className="overflow-x-auto rounded-md border border-gray-700 bg-black p-4 text-gray-100" {...props}>
                    {children}
                  </pre>
                );
              },
              code({ className, children, ...props }) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
