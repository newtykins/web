import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useResize from '@hooks/useResize';
import getBreakpoint from '@utils/getBreakpoint';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';

interface IconProps {
    icon: IconProp | any;
    iconClass?: string;
    calculatedSize: number;
}

interface Props extends Omit<IconProps, 'calculatedSize'> {
    className?: string;
    action?: string | (() => void);
    tooltip?: string;
    iconSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    shouldResize?: boolean;
}

const Icon: NextPage<IconProps> = ({ icon, calculatedSize, iconClass }) =>
    icon?.prefix ? (
        <FontAwesomeIcon
            icon={icon}
            className={`text-${calculatedSize === 1 ? '' : calculatedSize}xl ${iconClass ? ` ${iconClass}` : ''
                }`}
        />
    ) : (
        // @ts-expect-error
        <Icon />
    );

const SocialIcon: NextPage<Props> = ({
    action,
    icon,
    className,
    tooltip,
    iconClass,
    iconSize,
    shouldResize
}) => {
    iconSize ??= 2;
    shouldResize ??= true;

    const [calculatedSize, setIconSize] = useState<number>(iconSize);

    useResize(() => {
        if (shouldResize) {
            const breakpoint = getBreakpoint();

            if (breakpoint !== 'sm') {
                setIconSize(iconSize);
            } else {
                setIconSize(iconSize - 1);
            }
        }
    });

    return (
        <span className={`hover:cursor-pointer ${className ?? ''}`} title={tooltip}>
            {typeof action === 'string' ? (
                action.startsWith('/') ? (
                    <Link href={action}>
                        <a>
                            <Icon
                                icon={icon}
                                calculatedSize={calculatedSize}
                                iconClass={iconClass}
                            />
                        </a>
                    </Link>
                ) : (
                    <a href={action}>
                        <Icon icon={icon} calculatedSize={calculatedSize} iconClass={iconClass} />
                    </a>
                )
            ) : (
                <button onClick={action}>
                    <Icon icon={icon} calculatedSize={calculatedSize} iconClass={iconClass}></Icon>
                </button>
            )}
        </span>
    );
};

export default SocialIcon;
