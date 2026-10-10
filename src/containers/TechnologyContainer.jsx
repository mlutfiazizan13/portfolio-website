import { useEffect, useState } from "react";
import { getTechnologies } from "../services/Service";
import Endpoint from "../components/Endpoint";
import JsonCode from "../components/JsonCode";

// Each technology's "type" in technology.json is sorted into one of these rows
const groups = [
    { key: "languages", match: /language/i },
    { key: "frameworks", match: /framework|library/i },
    { key: "data", match: /database|cache|messaging/i },
    { key: "infrastructure", match: /devops|cloud/i },
];

const groupTechnologies = (technologies) => {
    const rows = groups.map(({ key }) => ({ key, names: [] }));
    const other = { key: "other", names: [] };

    technologies.forEach(({ name, type }) => {
        const index = groups.findIndex(({ match }) => match.test(type));
        (index === -1 ? other : rows[index]).names.push(name);
    });

    return [...rows, other].filter(({ names }) => names.length > 0);
};

/**
 * TechnologyContainer — the whole "GET /stack" section: the skills table
 * and an example request for the first group.
 */
const TechnologyContainer = () => {

    const [data, setData] = useState([]);

    async function fetchData(){
        try {
            const result = await getTechnologies();
            setData(result.data.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const rows = groupTechnologies(data);
    const example = rows[0];

    return (
        <Endpoint
            id="stack"
            method="GET"
            path="/stack"
            panelLabel="Request"
            panel={example && (
                <>
                    <pre className="mb-5 whitespace-pre-wrap font-mono text-[15px] leading-[1.8] [overflow-wrap:anywhere]">
                        <span className="text-panel-muted">$</span> curl /stack?type=<span className="text-panel-string">{example.key}</span>
                    </pre>
                    <JsonCode value={example.names} />
                </>
            )}
        >
            <h2 className="title mb-6 mt-4 text-4xl md:text-[44px]">Supported technologies</h2>
            <dl className="border-t border-line">
                {rows.map(({ key, names }) => (
                    <div key={key} className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-3.5">
                        <dt className="w-36 flex-none font-mono text-sm leading-7 text-muted">{key}</dt>
                        <dd className="min-w-0 flex-1 basis-60 font-semibold">{names.join(", ")}</dd>
                    </div>
                ))}
            </dl>
        </Endpoint>
     );
}

export default TechnologyContainer;
