import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A",
    image:
      "https://images.unsplash.com/photo-1657299143474-c456e8388ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    address: "haouhaochapichadcohaodvuaouvaod",
    description: "ovsovsfovusfuivsovuwouvhsdovishvishfpi",
  },
  {
    id: "m2",
    title: "A",
    image:
      "https://images.unsplash.com/photo-1657299143474-c456e8388ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    address: "haouhaochapichadcohaodvuaouvaod",
    description: "ovsovsfovusfuivsovuwouvhsdovishvishfpi",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
