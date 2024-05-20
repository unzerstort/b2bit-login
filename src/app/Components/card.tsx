import { ReactNode } from "react";

interface CardProps {
    title?: string;
    image: ReactNode;
    content: ReactNode
}

export default function Card({ title, image, content} : CardProps) {
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg p-4 card flex flex-col">
            <div className="font-bold text-center pb-2">{title}</div>
            <div className="self-center pb-8"> {image}</div>
            <div className="card-content">{content}</div>
        </article>
    );
}