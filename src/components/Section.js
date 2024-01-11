export const Section = ({ title, content }) => {
  return (
    <div className="mt-24 ml-12 mr-12">
      <h1 className="text-4xl font-bold">👇 {title}</h1>
      {content && <div>{content}</div>}
    </div>
  );
};
