'use client'

import { Fragment } from 'react'
import { toast } from 'react-toastify'
import { format, parseISO } from 'date-fns'

import Link from 'next/link'

import { Todo } from '@/app/types'
import DeleteButton from '../delete-button/delete-button'
import { deleteTodoServerAction } from '@/app/actions/todos/delete-todo-action'

type TodosTableProps = {
  data: Array<Todo>
}

export default function TodosTableBody({ data }: TodosTableProps) {
  const deleteTodoClientAction = async (formData: FormData) => {
    const result = await deleteTodoServerAction(formData)
    if (result?.error) {
      toast.error(result?.error)
    } else {
      toast.success('Todo deleted')
    }
  }

  return (
    <tbody>
      {data?.map((todo) => {
        const parsedDate = parseISO(todo.createdAt!)
        const formattedDate = format(parsedDate, 'dd.MM.yyyy')

        return (
          <Fragment key={todo._id}>
            <tr className="h-[45px]">
              <td>{todo.description}</td>
              <td>{todo.done ? 'Done' : 'Open'}</td>
              <td>{formattedDate}</td>
              <td>
                <div className="gap-2 flex">
                  <Link href={`/dashboard/todos/${todo._id}`}>
                    <button className="p-1 text-[--text] border-0 cursor-pointer bg-teal-600 rounded-md min-w-[80px]">
                      View
                    </button>
                  </Link>
                  <DeleteButton
                    action={deleteTodoClientAction}
                    id={todo._id!}
                  />
                </div>
              </td>
            </tr>
          </Fragment>
        )
      })}
    </tbody>
  )
}
