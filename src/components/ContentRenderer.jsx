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
    info:    'border-post        bg-blue-50     text-ink',
    warning: 'border-amber-500   bg-amber-50    text-amber-950',
    tip:     'border-get         bg-emerald-50  text-emerald-950',
    note:    'border-muted       bg-mist        text-soft',
};

const ContentRenderer = ({ blocks, onImageClick }) => {
    if (!blocks || blocks.length === 0) return null;

    return (
        <div className="max-w-[68ch] space-y-5 break-words">
            {blocks.map((block, index) => {
                switch (block.type) {

                    case 'paragraph':
                        return (
                            <p key={index} className="text-lg leading-relaxed text-soft">
                                {block.text}
                            </p>
                        );

                    case 'heading':
                        return (
                            <h2 key={index} className="title pb-1 pt-8 text-3xl">
                                {block.text}
                            </h2>
                        );

                    case 'subheading':
                        return (
                            <h3 key={index} className="pt-3 text-xl font-extrabold tracking-tight">
                                {block.text}
                            </h3>
                        );

                    case 'list':
                        return (
                            <ul key={index} className="list-outside list-disc space-y-2 pl-5 marker:text-get">
                                {(block.items || []).map((item, i) => (
                                    <li key={i} className="pl-1 text-lg leading-relaxed text-soft">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        );

                    case 'ordered-list':
                        return (
                            <ol key={index} className="list-outside list-decimal space-y-2 pl-6 marker:font-mono marker:text-base marker:font-bold marker:text-get">
                                {(block.items || []).map((item, i) => (
                                    <li key={i} className="pl-1 text-lg leading-relaxed text-soft">
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        );

                    case 'callout': {
                        const style = calloutStyles[block.variant] || calloutStyles.note;
                        return (
                            <div key={index} className={`rounded-r-lg border-l-4 px-5 py-4 ${style}`}>
                                {block.title && (
                                    <p className="mb-1.5 font-extrabold">{block.title}</p>
                                )}
                                <p className="text-base leading-relaxed">{block.text}</p>
                            </div>
                        );
                    }

                    case 'code':
                        return (
                            <div key={index} className="relative">
                                {block.language && (
                                    <span className="absolute right-4 top-3 select-none font-mono text-xs text-panel-muted">
                                        {block.language}
                                    </span>
                                )}
                                <pre tabIndex={0} className="overflow-x-auto rounded-lg bg-panel px-6 py-5 font-mono text-sm leading-relaxed text-panel-text">
                                    <code>{block.text}</code>
                                </pre>
                            </div>
                        );

                    case 'image':
                        return (
                            <figure key={index} className="my-4">
                                <button
                                    type="button"
                                    className="block aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg border border-line bg-mist"
                                    onClick={() => onImageClick && onImageClick(block.src)}
                                >
                                    <img
                                        src={block.src}
                                        alt={block.alt || ''}
                                        className="h-full w-full object-cover object-top"
                                    />
                                </button>
                                {block.caption && (
                                    <figcaption className="mt-2 text-sm text-muted">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );

                    case 'divider':
                        return <hr key={index} className="my-2 border-line" />;

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ContentRenderer;
