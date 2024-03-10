interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="bg-secondary px-4 py-1 rounded-md border border-highlight w-fit h-fit" {...props}>
      {children}
    </button>
  );
}
