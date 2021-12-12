import "./App.css";

const toDo = [
	{ completed: false, description: "brush cat"}, 
	{ completed: false, description: "beat rug"}, 
	{ completed: true, description: "rug cat"}
];

function ToDoList({ items }) {
  const list = items.map(({completed, description}, index) => (
  <tr key={index}>
	  <td>{completed ? "yes" : "no"}</td>
	  <td>{description}</td>
  </tr>
  ))
  return (
	  <table>
		  <thead>
			  <tr>
				  <th>
					  completed:
				  </th>
				  <th>
					  description:
				  </th>
			  </tr>
		  </thead>
		  <tbody>
			  {list}
		  </tbody>
	  </table>
  )
}

const buffetAlbums = [
  "Changes in Latitude, Changes in Attitude",
  "Songs You Know by Heart",
  "Son of a Sailor",
];

function Buffetnator({ albums }) {
  const list = albums.map((album, index) => <li key="index">{album}</li>);
  return <ul>{list}</ul>;
}

const ratedAlbums = [
  { thumbs: 5, album: "Changes in Latitude, Changes in Attitude" },
  { thumbs: 4, album: "Songs You Know by Heart" },
  { thumbs: 2, album: "Son of a Sailor" },
];

function AlbumRater({ albums }) {
  const rows = ratedAlbums.map(({ thumbs, album }, index) => (
    <tr key={index}>
      <td>{thumbs}</td>
      <td>{album}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Number of Thumbs Up</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function App() {
  return (
    <>
      <ToDoList items={toDo} />,
      <Buffetnator albums={buffetAlbums} />,
      <AlbumRater albums={ratedAlbums} />
    </>
  );
}

export default App;
