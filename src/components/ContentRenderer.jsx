/**
 * ContentRenderer — renders an array of structured content blocks.
 *
 * Supported block types (add to a project's "content" array in projects.json):
 *
 *  { "type": "paragraph",      "text": "..." }
 *  { "type": "heading",        "text": "Section title" }
 *  { "type": "subheading",     "text": "Smaller title" }
 *  { "type": "list",           "items": ["item 1", "item 2"] }
 *  { "type": "ordered-list",   "items": ["step 1", "step 2"] }
 *  { "type": "callout",        "variant": "info|warning|tip|note", "title": "Optional title", "text": "..." }
 *  { "type": "code",           "language": "bash", "text": "npm install" }
 *  { "type": "image",          "src": "/assets/...", "alt": "...", "caption": "Optional caption" }
 *  { "type": "divider" }
 */

const calloutStyles = {
    info:    'border-blue-300  bg-blue-50   text-blue-900',
    warning: 'border-yellow-300 bg-yellow-50 text-yellow-900',
    tip:     'border-green-300 bg-green-50  text-green-900',
    note:    'border-gray-200  bg-gray-50   text-gray-700',
};

const ContentRenderer = ({ blocks, onImageClick }) => {
    if (!blocks || blocks.length === 0) return null;

    return (
        <div className="space-y-5">
            {blocks.map((block, index) => {
                switch (block.type) {

                    case 'paragraph':
                        return (
                            <p key={index} className="text-lg leading-relaxed text-gray-700">
                                {block.text}
                            </p>
                        );

                    case 'heading':
                        return (
                            <h2 key={index} className="text-2xl font-bold text-black pt-6 pb-1 border-b border-gray-100">
                                {block.text}
                            </h2>
                        );

                    case 'subheading':
                        return (
                            <h3 key={index} className="text-xl font-semibold text-black pt-3">
                                {block.text}
                            </h3>
                        );

                    case 'list':
                        return (
                            <ul key={index} className="space-y-1.5 pl-5">
                                {(block.items || []).map((item, i) => (
                                    <li key={i} className="text-base leading-relaxed text-gray-700 flex gap-2">
                                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#323443] opacity-60"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );

                    case 'ordered-list':
                        return (
                            <ol key={index} className="space-y-1.5 pl-5 list-decimal list-outside">
                                {(block.items || []).map((item, i) => (
                                    <li key={i} className="text-base leading-relaxed text-gray-700 pl-1">
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        );

                    case 'callout': {
                        const style = calloutStyles[block.variant] || calloutStyles.note;
                        return (
                            <div key={index} className={`border-l-4 px-5 py-4 rounded-r-xl ${style}`}>
                                {block.title && (
                                    <p className="font-semibold text-sm uppercase tracking-wide mb-1.5">{block.title}</p>
                                )}
                                <p className="text-sm leading-relaxed">{block.text}</p>
                            </div>
                        );
                    }

                    case 'code':
                        return (
                            <div key={index} className="relative group">
                                {block.language && (
                                    <span className="absolute top-3 right-4 text-xs font-mono text-gray-500 uppercase select-none">
                                        {block.language}
                                    </span>
                                )}
                                <pre className="bg-[#1e1e2e] text-[#cdd6f4] rounded-xl px-6 py-5 overflow-x-auto text-sm font-mono leading-relaxed">
                                    <code>{block.text}</code>
                                </pre>
                            </div>
                        );

                    case 'image':
                        return (
                            <figure key={index} className="my-4">
                                <div
                                    className="overflow-hidden cursor-zoom-in group aspect-video rounded-sm"
                                    onClick={() => onImageClick && onImageClick(block.src)}
                                >
                                    <img
                                        src={block.src}
                                        alt={block.alt || ''}
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                {block.caption && (
                                    <figcaption className="text-center text-sm text-gray-400 mt-2 italic">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case 'divider':
                        return <hr key={index} className="border-gray-100 my-2" />;

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ContentRenderer;
