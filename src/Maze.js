import { useState, useMemo, useEffect, useRef } from "react";
import { generateMaze } from "./util";
import img from './gifs/bg1.jpg';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import styled from "styled-components";
import Collage from "./Collage";
import Line from "./Line";
import "./styles.scss";

function Maze() {
  const [checkPoint,setCheckPoint] = useState(0);
  const [checkPointStatus, setCheckPointStatus] = useState([0,0,0,0]);
  const [status, setStatus] = useState("playing");
  const mazeRef = useRef(null);

  const [size] = useState(10);

  const [userPosition, setUserPosition] = useState([0, 0]);

  const maze = useMemo(() => generateMaze(size, size), [size]);

  const checkHandler = (data)=>{
    setStatus(data);
  }


  useEffect(() => {
    mazeRef.current.focus();
  }, []);
  useEffect(() => {
    mazeRef.current.focus();
  }, [status]);

  useEffect(() => {
    const lastRowIndex = maze.length - 1;
    const lastColIndex = maze[0].length - 1;
    if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex && checkPoint===4)  {
      setStatus("won");
    }
    else if (userPosition[0] === lastRowIndex && userPosition[1] === lastColIndex && checkPoint<=3)  {
      setStatus("notYet");
    }
    else if (userPosition[0] === 1 && userPosition[1] === 4) {

      const copyarry = [...checkPointStatus];
      if(copyarry[0]===1){
        setStatus("playing")
      }else{
        setStatus("check");
        copyarry[0]=1;
        setCheckPoint(prev => prev+1);
        setCheckPointStatus(copyarry);
      }
      
    }
    else if (userPosition[0] === 3 && userPosition[1] === 8) {
      const copyarry = [...checkPointStatus];
      if(copyarry[1]===1){
        setStatus("playing")
      }else{
        setStatus("check");
        copyarry[1]=1;
        setCheckPoint(prev => prev+1);
        setCheckPointStatus(copyarry);
      }
    }
    else if (userPosition[0] === 8 && userPosition[1] === 1) {
      const copyarry = [...checkPointStatus];
      if(copyarry[2]===1){
        setStatus("playing")
      }else{
        setStatus("check");
        copyarry[2]=1;
        setCheckPoint(prev => prev+1);
        setCheckPointStatus(copyarry);
      }
    }
    else if (userPosition[0] === 5 && userPosition[1] === 4) {
      const copyarry = [...checkPointStatus];
      if(copyarry[3]===1){
        setStatus("playing")
      }else{
        setStatus("check");
        copyarry[3]=1;
        setCheckPoint(prev => prev+1);
        setCheckPointStatus(copyarry);
      }
    }
    else{
      setStatus("playing");
    }
  }, [userPosition[0], userPosition[1]]);
  
  const makeClassName = (i, j) => {
    const rows = maze.length;
    const cols = maze[0].length;
    let arr = [];
    if (maze[i][j][0] === 0) {
      arr.push("topWall");
    }
    if (maze[i][j][1] === 0) {
      arr.push("rightWall");
    }
    if (maze[i][j][2] === 0) {
      arr.push("bottomWall");
    }
    if (maze[i][j][3] === 0) {
      arr.push("leftWall");
    }
    if (i === rows - 1 && j === cols - 1) {
      arr.push("destination");
    }
    if ((i === 1 && j === 4) || (i === 3 && j === 8) || (i === 8 && j === 1) || (i === 5 && j === 4 )) {
      arr.push("checkPoint");
    }
    if (i === userPosition[0] && j === userPosition[1]) {
      arr.push("currentPosition");
    }
    return arr.join(" ");
  };

  const handleMove = (e) => {
    e.preventDefault();
    const key = e.code;

    const [i, j] = userPosition;
    if ((key === "ArrowUp" || key === "KeyW") && maze[i][j][0] === 1) {
      setUserPosition([i - 1, j]);
    }
    if ((key === "ArrowRight" || key === "KeyD") && maze[i][j][1] === 1) {
      setUserPosition([i, j + 1]);
    }
    if ((key === "ArrowDown" || key === "KeyS") && maze[i][j][2] === 1) {
      setUserPosition([i + 1, j]);
    }
    if ((key === "ArrowLeft" || key === "KeyA") && maze[i][j][3] === 1) {
      setUserPosition([i, j - 1]);
    }

  };


  return (
    <>
    <Div>
      <Collage checkPoint={checkPoint} status={status} checkHandler={checkHandler}></Collage>
    <Wrapper>
      <Right>
        <Line checkPoint={checkPoint} checkPointStatus={checkPointStatus}></Line>
        
      </Right>
      <Left>
      <div ref={mazeRef} className="App" onKeyDown={handleMove} tabIndex={-1}>
      <p className="info">Use WSAD or Arrow Keys to move</p>
      <table id="maze">
        <tbody>
          {maze.map((row, i) => (
            <tr key={`row-${i}`}>
              
              {row.map((cell, j) => (
                <>
                  
                <td key={`cell-${i}-${j}`} className={makeClassName(i, j)}> 
                <div>
                  <FavoriteOutlinedIcon style={{ color: 'inherit' }}/>
                </div>
                </td>
                </> 
              ))}
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
    {checkPoint===4?<><Para>Looking forward to clearing more checkpoints together XOXO</Para><Aid>(Reach the finish point)</Aid></>:<></>}
      </Left>
      </Wrapper>
      </Div>
    </>
    
    
  );
}

export default Maze;

const Div = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${img});

`
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
`
const Right = styled.div`
width: 30%;
height: 60%;
position:relative;
top:10%;

`
const Left = styled.div`
width: 40%;
height: 60%;
`
const Para = styled.p`
  @font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
  }
  font-family: 'Rocher';
  font-weight: 900;
  text-align: center;
  font-size: 30px;
  
`
const Aid = styled.p`
  @font-face {
    font-family: 'Rocher';
    src: url(https://assets.codepen.io/9632/RocherColorGX.woff2);
  }
  font-family: 'Rocher';
  font-weight: 900;
  text-align: center;
  font-size: 20px;
  
`

