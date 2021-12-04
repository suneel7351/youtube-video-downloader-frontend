import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../App.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Seo() {
  const classes = useStyles();
  return (
    <div style={{ marginTop: "15px" }}>
      <Card id="cardId" style={{ marginTop: "15px" }}>
        <CardContent>
          <h2 style={{ textAlign: "" }}>How to download youtube video</h2>
          <p>
            1. First go to Youtube and then copy the link of that video which
            you want to download. <br />
            2. Then open yt2downloaders website and paste the link in the search
            box. <br />
            3. Click on the Download button. <br />
            4. Now you can download video or Audio or both. <br />
            Video Formate and Audio Formate. <br />
            5. Click on the available quality. <br />
            6. Now your video/audio has been successfully downloaded.
          </p>
        </CardContent>
      </Card>
      <Card id="cardId" style={{ marginTop: "15px" }}>
        <CardContent>
          <h2 style={{ textAlign: "" }}>Best Downloader</h2>
          <p>
            YouTube Video Downloader helps you to save Youtube videos to your
            device. You can choose from a variety of formats and qualities to
            download.
          </p>
        </CardContent>
      </Card>
      <div id="container-a9cbbe6b52a925032cfb7d550d9f0b03"></div>
      <Card id="cardId" style={{ marginTop: "15px" }}>
        <CardContent>
          <h2 style={{ textAlign: "" }}>Download Youtube Shorts Video</h2>
          <p>
            Many youtube downloaders can't download videos from youtube shorts
            like snaptube, We can only download video from youtube shorts.
          </p>
        </CardContent>
      </Card>
      <Card id="cardId" style={{ marginTop: "15px" }}>
        <CardContent>
          <h2 style={{ textAlign: "" }}>Easy</h2>
          <p>
            Simplest youtube downloader, Download different formats in just 2
            clicks.
          </p>
        </CardContent>
      </Card>

      <Card id="cardId" style={{ marginTop: "15px" }}>
        <CardContent>
          <h2 style={{ textAlign: "" }}>Safe</h2>
          <p>100% safe youtube downloader, Download videos without worries.</p>
        </CardContent>
      </Card>

      <Card id="cardId" style={{ marginTop: "15px" }}>
        <CardContent>
          <h2 style={{ textAlign: "" }}>Download different Format</h2>
          <p>
            Download all video and audio formats conversion. You can easily
            convert YouTube videos to MP3, 3GP, MP4, WMA, M4A, FLV, WEBM and MO
            formats, etc.
          </p>
        </CardContent>
      </Card>
      <p>
        By using our downloader you can easily convert YouTube videos to MP3,
        MP4, 3GP, WEBM, M4A files... and download them for free - this service
        works for computers, tablets and mobile devices. The videos are always
        converted in the highest available quality.
      </p>
    </div>
  );
}

export default Seo;
