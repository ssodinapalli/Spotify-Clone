import React, { useState, useRef, useEffect } from 'react'
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            this.props.setCurrentSongIndex(() => {
                let temp = this.props.currentSongIndex;
                temp++;

                if (temp > this.props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            this.props.setCurrentSongIndex(() => {
                let temp = this.props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = this.props.songs.length - 1;
                }

                return temp;
            });
        }
    }

    return (
        <div className="c-player">
            <audio src={this.props.songs[this.props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={this.props.songs[props.currentSongIndex]} />
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <p>Next up: <span>{this.props.songs[this.props.nextSongIndex].title} by {this.props.songs[this.props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;
