const allTags = ['Fashion', 'News', 'Clothing', 'Shopping', 'Ideas'];

function TagItem({ tag, index, selectedTags }) {
    return (
        <span className={selectedTags.includes(tag) ? 'selected' : null}>
            {tag}
        </span>
    );
}

export default function TagsBlock({ selectedTags = [] }) {
    return (
        <div className="bg-something py-100" style={{ backgroundColor: 'cadetblue' }}>
            <div className="container">
                <h2>Tags</h2>
                <div className="tags">
                    {allTags.map((tag, index) => (
                        <TagItem tag={tag} key={index} selectedTags={selectedTags} />
                    ))}
                </div>
            </div>
        </div>
    );
}
