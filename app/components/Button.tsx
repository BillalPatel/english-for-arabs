interface ButtonProps {
  buttonText: any;
  width?: string;
  onclick?: () => void;
}

export function Button(props: ButtonProps) {
  const { buttonText, width = "40" } = props;

  return (
    <button
      type="submit"
      className={`button | rounded-xl px-5 py-2 md:px-4 lg:px-5 bg-blue hover:text-brown text-offWhite md:text-lg lg:text-lg w-${width} md:w-28 lg:w-28 mx-auto`}
    >
      {buttonText}
    </button>
  );
}
