export default function SearchBar() {
    return (
        <>
        <div className="flex justify-center items-center my-4 fixed top-0  w-[30vw] h-[5vh] "> 
            <input type="text" placeholder="Search " className="w-[60%] h-10 px-5 text-sm text-gray-900 bg-gray-50 mr-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded-lg border-2 border-green-500" />
            <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                <path fill="#1c1b17" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
            </svg>
            </a>
        </div>
        </>
    );
}