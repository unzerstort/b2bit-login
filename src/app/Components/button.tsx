interface ButtonProps {
    type?: 'submit' | 'reset' | 'button' | undefined;
    label: string;
}

export default function Button({ type, label } : ButtonProps) {
    return (
        <button type={type} className="w-full block button--color hover:bg-yellow-400 focus:bg-yellow-400 text-white hover:text-black font-semibold rounded-lg
        px-4 py-3">
            { label }
        </button>
    );
}