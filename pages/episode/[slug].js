import { useContext, useState } from "react";
import Link from "next/link";
// import { useAppContext } from "../../state/AppContext";
import { getFeedItemsIds, getFeedItemData } from "../../lib/feed";

export async function getStaticProps({ params }) {
  console.log(params);
  const episode = await getFeedItemData(params.slug);
  return {
    props: {
      episode,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getFeedItemsIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Episode({ episode , setActiveAudio }) {

  return (
    <>
      <h1>
        {episode.title}
      </h1>
      <Link href="/">
        {/* <a className="link-back">Ir a home</a> */}
        <button className="button-back">Ir a la home</button>
      </Link>
      <button
        className="button-play"
        onClick={() => setActiveAudio(episode.enclosure.url)}
      >
        Play
      </button>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at porttitor arcu, et auctor quam. Nulla vehicula vitae arcu vel ultricies. Aliquam quis maximus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque nunc dolor, sollicitudin in urna nec, convallis elementum nibh. Morbi non eleifend quam. Vivamus ullamcorper porta varius. Curabitur lobortis hendrerit mauris, efficitur imperdiet augue tristique eget. Quisque vel egestas nulla. Sed id mollis risus, at eleifend orci.</p>
<p>Nullam interdum elementum sagittis. Maecenas et sodales tortor, ut consequat metus. Sed tempus porta tortor, eu eleifend diam ullamcorper sed. Donec leo mi, congue in ipsum a, dictum imperdiet elit. Nunc arcu risus, fermentum quis nibh vel, semper dictum ante. Nunc egestas massa et aliquam vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet porttitor odio. Maecenas vehicula ante ipsum, id aliquam dolor elementum vel. Morbi a tincidunt arcu, et iaculis purus. Praesent porttitor nibh quis leo euismod, a aliquet justo placerat. Ut tellus urna, sagittis et gravida id, laoreet eu enim. Integer eu arcu ac tortor ultricies viverra. Pellentesque molestie consectetur bibendum.</p>
<p>Etiam pulvinar accumsan lectus, non sodales lacus pulvinar vel. Cras scelerisque dignissim mattis. Donec lacinia nunc ac urna rutrum, eget mollis mi pulvinar. Proin ac tristique neque. Nam bibendum felis id sapien ullamcorper, non blandit velit tincidunt. Donec consectetur congue quam et volutpat. Cras interdum ultrices velit, non convallis sem viverra vel. Nulla vitae lacus quis justo lacinia porta id elementum justo.</p>
<p>Pellentesque cursus lorem velit, auctor ornare nisl ullamcorper id. Nunc eu eros sit amet tellus sagittis pulvinar ut in nisi. Fusce ultrices magna id condimentum condimentum. Curabitur tristique, sem ac laoreet laoreet, elit eros aliquam ante, id efficitur nunc libero sed risus. Sed tincidunt, nisl vel tincidunt lobortis, nunc purus venenatis massa, vel placerat urna risus ac felis. Proin tempus vitae ligula quis ornare. Quisque lobortis ante id sem pretium, quis pellentesque justo tristique. Integer ultricies in lectus in varius. Mauris id vehicula erat.</p>
<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ut euismod eros. Pellentesque sit amet velit dolor. Donec nunc ex, auctor et lacus eu, pretium pellentesque metus. In interdum libero ut dui rhoncus, sed egestas diam placerat. Cras eget fermentum dolor. Vivamus bibendum mauris at ornare sollicitudin. Mauris viverra purus eget elit aliquam bibendum. Integer imperdiet eget orci vitae euismod. Integer sit amet ex vitae diam faucibus euismod. Etiam at urna sodales enim lobortis imperdiet. Donec eu porttitor massa. Phasellus efficitur auctor maximus. Ut elementum finibus ipsum, sit amet ultricies metus imperdiet quis. Donec sed justo arcu.</p>
<p>Aliquam mauris enim, accumsan eget ligula nec, gravida convallis tortor. Donec quis arcu mi. Vivamus mattis pretium lobortis. Praesent placerat nunc eu mi consequat, vel viverra elit tristique. Donec ac tortor nulla. Pellentesque malesuada ligula vitae ante condimentum, nec lacinia lorem lacinia. Proin faucibus scelerisque dapibus. Morbi fermentum pellentesque lectus vel condimentum. Nulla rutrum tellus eu neque tristique, ut porta lacus laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In pharetra efficitur enim, eu iaculis ipsum facilisis sed. Proin sit amet venenatis nulla, a scelerisque libero. Nullam fringilla, dui ut hendrerit fringilla, libero mi lacinia velit, id consequat nunc erat in nisi. Aliquam aliquet iaculis odio, vitae semper felis pretium quis. Nunc sed ipsum dolor.</p>
<p>Vestibulum eget mi non ante imperdiet elementum. Donec feugiat pretium tellus lacinia lobortis. Suspendisse quis tincidunt velit. Nullam in mauris purus. Nulla et elit id felis pretium tempus. Donec efficitur magna et tristique rutrum. Fusce consectetur nec urna vitae congue. Cras eleifend mi eu porta euismod. Etiam imperdiet dui ut massa ornare aliquet. Maecenas aliquam lectus lectus, sodales rhoncus est pharetra et.</p>
<p>Duis viverra, purus eget commodo molestie, lectus metus sodales odio, a hendrerit metus lorem non leo. Praesent nec nibh dui. Vivamus varius fermentum dapibus. Maecenas vehicula justo nisl, vel egestas tellus lacinia id. Nulla eget egestas erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo justo, scelerisque id tellus vel, malesuada euismod risus. Quisque a egestas ante, ac scelerisque massa. Aenean non odio aliquam, venenatis tellus id, vulputate massa. Donec vitae tristique odio. Aliquam tristique faucibus ligula eu egestas.</p>
<p>Nam vitae suscipit nulla. In hac habitasse platea dictumst. Donec sapien quam, mattis et fermentum sit amet, laoreet id sapien. Cras rhoncus efficitur bibendum. Donec auctor a lacus et pellentesque. Donec at urna et diam cursus condimentum sit amet a mi. Vivamus et libero enim.</p>
    </>
  );
}
