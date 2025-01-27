import Link from "next/link";

function createMarkup(content) {
  return { __html: content };
}

export default function EpisodeItem({ episode, handleEpisodeClick }) {
  return (
    <div>
      {/* <pre>{JSON.stringify(episode, null, 2)}</pre> */}
        
      <h3 className="text-3xl font-bold underline text-blue-600">
        <Link href={`/episode/${episode.slug}`}>{episode.title}</Link>
      </h3>
      <div dangerouslySetInnerHTML={createMarkup(episode.content)} />
      <button
      className="button-play"
      onClick={() => handleEpisodeClick(episode.enclosure.url)}>
        Play
      </button>
    </div>
  );
}
