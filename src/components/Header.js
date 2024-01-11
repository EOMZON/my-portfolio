import { greetingsText } from './texts';

export const Header = () => {
  return (
    <div className="flex items-center justify-center   mt-20 ml-12">
      <h1 className="text-5xl ">{greetingsText}</h1>
    </div>
  );
};
