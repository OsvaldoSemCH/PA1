import Placeholder1 from "@/assets/Placeholder1.jpg"
import Placeholder2 from "@/assets/Placeholder2.png"
import Placeholder3 from "@/assets/Placeholder3.jpg"

export default function Tailwind()
{
    return(
        <div className="flex flex-wrap justify-center items-stretch gap-12 w-full pt-12 pb-12">
            <div className="flex flex-col justify-between items-center w-64 ease-in duration-100 hover:scale-110
            rounded-lg border-2 border-black border-solid bg-slate-600 text-white text-center
            ">
                <div>
                    <img src={Placeholder1.src} className="w-full rounded-t-lg h-48 object-cover"></img>
                    <div className="flex flex-col justify-start items-center w-full px-4">
                        <span className="text-lg">4 days ago</span>
                        <span className="text-2xl">Post 1</span>
                        <span className="text-sm">
                            case WM_LBUTTONDOWN:
                                HDC hdc = GetDC(hwnd);
                                SelectObject(hdc, GetStockObject(DC_BRUSH));
                                if(SendMessage(Radio1, BM_GETCHECK, 0, 0) == BST_CHECKED)
                                if(SendMessage(Radio2, BM_GETCHECK, 0, 0) == BST_CHECKED)
                                if(SendMessage(Radio3, BM_GETCHECK, 0, 0) == BST_CHECKED)
                                Ellipse(hdc, 0, 0, 300, 300);
                            break;
                        </span>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full h-16 bg-green-500 justify-self-end rounded-b-lg">
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-64 ease-in duration-100 hover:scale-110
            rounded-lg border-2 border-black border-solid bg-slate-600 text-white text-center
            ">
                <div>
                    <img src={Placeholder2.src} className="w-full rounded-t-lg h-48 object-cover"></img>
                    <div className="flex flex-col justify-start items-center w-full px-4">
                        <span className="text-lg">1 week ago</span>
                        <span className="text-2xl">Post 2</span>
                        <span className="text-sm">
                            TRACKMOUSEEVENT tme;
                            tme.cbSize = sizeof(TRACKMOUSEEVENT);
                            tme.dwFlags = TME_LEAVE;
                            tme.hwndTrack = hwnd;
                            TrackMouseEvent(&tme);

                            ++Count;
                            wchar_t Text[10];
                            wmemset(Text, 0, 10);
                            swprintf(Text, L"%i", Count);
                            TextOut(hdc, 130, 130, Text, 10);

                            ReleaseDC(hwnd, hdc);
                        </span>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full h-16 bg-fuchsia-500 justify-self-end rounded-b-lg">
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center w-64 ease-in duration-100 hover:scale-110
            rounded-lg border-2 border-black border-solid bg-slate-600 text-white text-center
            ">
                <div>
                    <img src={Placeholder3.src} className="w-full rounded-t-lg h-48 object-cover"></img>
                    <div className="flex flex-col justify-start items-center w-full px-4">
                        <span className="text-lg">3 weeks ago</span>
                        <span className="text-2xl">Post 3</span>
                        <span className="text-sm">
                            TRACKMOUSEEVENT tme;
                            tme.cbSize = sizeof(TRACKMOUSEEVENT);
                            tme.dwFlags = TME_LEAVE;
                            tme.hwndTrack = hwnd;
                            TrackMouseEvent(&tme);

                            ++Count;
                            wchar_t Text[10];
                            wmemset(Text, 0, 10);
                            swprintf(Text, L"%i", Count);
                            TextOut(hdc, 130, 130, Text, 10);

                            ReleaseDC(hwnd, hdc);
                        </span>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center w-full h-16 bg-orange-500 justify-self-end rounded-b-lg">
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                    <div className="w-1/3 border-2 border-solid border-black h-full">
                        <span>Texto</span>
                    </div>
                </div>
            </div>
        </div>
    )
}