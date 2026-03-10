export const Icon = (props: { children: string; class?: string }) => {
  return (
    <span class={`material-symbols-rounded ${props.class || ""}`}>
      {props.children}
    </span>
  );
};

export const ic = (string: string) => {
  return string;
};
