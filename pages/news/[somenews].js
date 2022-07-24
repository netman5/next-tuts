import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  const newsId = router.query.somenews;

  // Send a request to the server to get the news details
  // const [news, setNews] = useState(null);
  return (
    <div>
      <h1>Detail Page</h1>
      <p>This is the home of single news</p>
    </div>
  );
}

export default DetailsPage;