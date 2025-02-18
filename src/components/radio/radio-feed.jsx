import RadioDiv from "./radio-div";

export default function RadioFeed() {
    return (
        <div className="flex flex-col my-5 bg-green-500 w-[75vw] h-[20vh] items-center p-5 rounded-lg [font-family:'Montserrat',sans-serif] tracking-wide  ">
                <h1>Feed de radios</h1>
            <div className="flex flex flex-wrap  w-[75vw] h-[20vh] items-center ">
                <RadioDiv/>
                <RadioDiv/>
                <RadioDiv/>
                <RadioDiv/>
                <RadioDiv/>
            </div>
        </div>
    );
}