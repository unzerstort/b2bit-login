export default function Card({ title, image, content}) {
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg p-4">
            <div className="card-title">{title}</div>
            <div className="card-image"> {image}</div>
            <div className="card-content">{content}</div>
        </article>
    );
}