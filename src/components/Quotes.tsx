import { Typography } from "@material-ui/core";

interface QuoteProps {
  text: string;
  speaker?: string;
}
export const Quotes: React.FC<QuoteProps> = ({ text, speaker }) => {
  return (
    <section className="quotes">
      <Typography variant="h5" variantMapping={{"h5": "h3"}}>“{text}”</Typography>
      {speaker && (
        <div className="author">
          <Typography variant="h5" variantMapping={{"h5": "h4"}}> ― {speaker}</Typography>
        </div>
      )}
    </section>
  );
};

export default Quotes;
