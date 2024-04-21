import react, { usestate } from ' react;
  function datefunction (){
     const[input, setinput]=usestate('')
    const[output,setoutput]=usestate('')

fuction calculate(){
  if(input){
    const date =new date(input)
    date.setdate(date.getdate()+90)
    let(input){
      letmonth=date.getmonth();
      let year=date.getfullYear();

           if(day<10){
             day=0${day}'
           }
      if(month<10){
        month=0${month}
      }
      const final ='${day}/${month}?${year}
        setoutput(final)
    }
  }
  const back ="https://t3.ftcdn.net/jpg/03/02/04/06/360-f-302040655-IEH9RYDIU7LL8YCLJGLISKHRPO1M1SV.JPG"
  RETURN(
    <div style = {{ backgroundimage ; url(${back); backgroundrepart: no -repart",background:cover"}}>
    <div classname =" container gap-4 style= {{display;" flex",justify content;center",flex direction :" column",alignitems ;" center"
    <h1 classname = " text - white " style={{fontfamily;monospace",font size :" 40px"' font weight : " bolder"}}>couse duration 90day's</h
      <div classname = " text - white " style ={{font family: " cursive ", font size : " 20px

                <h1 className="text-white" style={{fontFamily:"cursive",fontSize:"20px",fontWeight:"bolder",alignSelf:"center"}}>Start Date</h1>
                <input type="date" value={input} onChange={(x)=>setInput(x.target.value)} style={{width:"200px",alignSelf:"center",borderRadius:"20px",padding:"5px"}}/>
                <button onClick={calculate} style={{width:"200px",alignSelf:"center",borderRadius:"20px",padding:"5px",fontWeight:"bolder"}}>Calculate</button>
                <h1 style={{fontFamily:"cursive",fontSize:"20px",fontWeight:"bolder",alignSelf:"center",color:"white"}}>End Date:{output}</h1
         <div/>
    </div>
  )
}
export { dateof function
        
    
