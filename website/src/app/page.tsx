import { Button } from "@mui/material";
const websiteUrl = process.env.NEXT_WEBSITE_URL;

export default function Home() {

  return (
    <div className="temp-landing">
      <h1>Welcome To Arcadia Website 2.0</h1>
      <p>
        Greetings! It seems like you discovered the domain of the new public website
        <br />
        Things aren't quite ready so here is a little help to get you back to the main site.
      </p>
      <Button variant="contained"><a href={websiteUrl}>Back to Arcadia</a></Button>
    </div>
  );
}
