import Link from 'next/link'

type ViewButtonProps = {
  id: string
  path: string
}

export default function ViewButton({ id, path }: ViewButtonProps) {
  return (
    <Link href={`/dashboard/${path}/${id}`}>
      <button className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[100px]">
        View
      </button>
    </Link>
  )
}
