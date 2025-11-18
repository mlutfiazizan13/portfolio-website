import React from 'react';

const renderBlock = (block, idx) => {
  switch (block.type) {
    case 'heading': {
      const HeadingTag = `h${block.level || 3}`;
      return (
        <HeadingTag className="mb-20" key={`${block.type}-${idx}`}>
          {block.value}
        </HeadingTag>
      );
    }
    case 'text':
      return (
        <p className="mb-30 fz-18" key={`${block.type}-${idx}`}>
          {block.value}
        </p>
      );
    case 'list':
      if (!block.items?.length) return null;
      const ListTag = block.ordered ? 'ol' : 'ul';
      return (
        <ListTag className="mb-30" key={`${block.type}-${idx}`}>
          {block.items.map((item, itemIdx) => (
            <li className="mb-10" key={`${block.type}-${idx}-${itemIdx}`}>
              {item}
            </li>
          ))}
        </ListTag>
      );
    case 'image':
      return (
        <figure className="mb-40" key={`${block.type}-${idx}`}>
          <img src={block.src} alt={block.caption || 'Project image'} />
          {block.caption && <figcaption className="mt-10 opacity-8">{block.caption}</figcaption>}
        </figure>
      );
    case 'gallery':
      if (!block.images?.length) return null;
      return (
        <div className="row mb-40" key={`${block.type}-${idx}`}>
          {block.images.map((img, galleryIdx) => (
            <div className="col-md-6 mb-20" key={`${block.type}-${idx}-${galleryIdx}`}>
              <img src={img} alt={`Gallery ${galleryIdx + 1}`} className="w-100" />
            </div>
          ))}
        </div>
      );
    case 'code':
      return (
        <pre className="mb-30" key={`${block.type}-${idx}`}>
          <code>{block.value}</code>
        </pre>
      );
    default:
      return null;
  }
};

function Content({ blocks = [] }) {
  if (!blocks.length) return null;

  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            {blocks.map((block, idx) => renderBlock(block, idx))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
