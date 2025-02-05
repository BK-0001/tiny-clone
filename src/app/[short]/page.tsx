import Nothing from "@/components/features/urls/nothing";

// http://localhost:3000/12314f
// update number of clicks revalidate data or use some state
export default function RedirectComponent() {
  return <Nothing />;
}

// option 1 revalidate based on the time interval on my-urls
// option 2 revalidate after initial render of the page with useEffect (client)
