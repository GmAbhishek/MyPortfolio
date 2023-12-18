import Image from 'next/image'
 import avatar from '@images/home/hero/gm-avatar.gif'
export default function Avatar() {
  return (
    <Image
      src={avatar}
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}