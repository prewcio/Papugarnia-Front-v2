import { ReactNode, useRef, useState } from "react";

type HeaderListProps = {
    className?: string;
    label?: string;
    children?: ReactNode;
};

export default function HeaderList({ className, label, children }: HeaderListProps) {
    const headerRef = useRef<HTMLButtonElement>(null);
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    }

    return (
        <>
            {label && 
                <button ref={headerRef} className='react-wavy-transitions__wavy-link' style={{ textAlign: 'center', paddingRight: '10px', borderRight: isListVisible ? '1px solid rgba(0,0,0,0.4)' : '1px solid transparent', transition: 'border 1s ease' }} onClick={toggleListVisibility}>
                    {label}
                </button> 
            }
            <div className={`list-content ${isListVisible ? "visible" : ""}`}>
                {children}
            </div>
        </>
    )
}
