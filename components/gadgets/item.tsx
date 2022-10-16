import Image from 'next/image';
import React, { ForwardedRef } from 'react';
import { Gadget } from '../../model/gadget';
import Link from 'next/link';
interface GadgetListProps {
    data: Gadget
}
const GadgetItem: React.FC<GadgetListProps> = ({ data }) => {
    return (
        <> <Link href={"/catalog/" + data.id} passHref>
            <GadgetItemLink data={data} label={''} />
        </Link>
        </>
    );
}
export default GadgetItem;

interface GadgetItemLinkProps {
    label: string;
    href?: string;
    data: Gadget
}

const GadgetItemLink: React.FC<GadgetItemLinkProps> = React.forwardRef((props, ref: ForwardedRef<HTMLAnchorElement>) => {
    const { data } = props;
    return (
        <div>
            <a className="group" href={props.href} ref={ref}>
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                    <Image width={150} height={150} layout={"responsive"} src={data.image} alt={data.title} />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{data.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{data.description}</p>
            </a>
        </div>
    )
})

GadgetItemLink.displayName = 'GadgetItemLink';