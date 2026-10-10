const isPrimitive = (value) => value === null || typeof value !== "object";

// Like JSON.stringify(value, null, 2), but lists of plain values stay on one line
// when the whole line (indent and key included) fits the panel.
const maxLine = 40;

const format = (value, indent = "", keyLength = 0) => {
  if (isPrimitive(value)) return JSON.stringify(value);

  const inner = indent + "  ";

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    if (value.every(isPrimitive)) {
      const oneLine = `[${value.map((item) => JSON.stringify(item)).join(", ")}]`;
      if (indent.length + keyLength + oneLine.length <= maxLine) return oneLine;
    }
    return `[\n${value.map((item) => inner + format(item, inner)).join(",\n")}\n${indent}]`;
  }

  const entries = Object.entries(value);
  if (entries.length === 0) return "{}";
  return `{\n${entries
    .map(([key, item]) => `${inner}${JSON.stringify(key)}: ${format(item, inner, key.length + 4)}`)
    .join(",\n")}\n${indent}}`;
};

const tokenPattern = /("(?:\\.|[^"\\])*")(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d+)?/g;

const highlight = (text) => {
  const parts = [];
  let last = 0;

  for (const match of text.matchAll(tokenPattern)) {
    if (match.index > last) parts.push(text.slice(last, match.index));

    if (match[1] && match[2]) {
      parts.push(<span key={match.index} className="text-panel-key">{match[1]}</span>, match[2]);
    } else if (match[1]) {
      parts.push(<span key={match.index} className="text-panel-string">{match[1]}</span>);
    } else {
      parts.push(<span key={match.index} className="text-panel-number">{match[0]}</span>);
    }

    last = match.index + match[0].length;
  }

  parts.push(text.slice(last));
  return parts;
};

/**
 * JsonCode — prints a value as syntax-coloured JSON. Meant for dark panels.
 */
const JsonCode = ({ value }) => {
  return (
    <pre className="whitespace-pre-wrap font-mono text-[15px] leading-[1.8] [overflow-wrap:anywhere]">
      <code>{highlight(format(value))}</code>
    </pre>
  );
};

export default JsonCode;
