'use client'

import { Fragment, useEffect, useState } from 'react'

import { Todo } from '@/types'
import DeleteForm from '@/app/dashboard/todos/delete-form'
import UpdateForm from '@/app/dashboard/todos/update-form'
import { convertParseISODate } from '@/utils/convertParseISODate'

type TodosTableProps = {
  data: Array<Todo>
}

export default function TodosTableBody({ data }: TodosTableProps) {
  const [todos, setTodos] = useState<Todo[]>()

  useEffect(() => {
    setTodos(data)
  }, [data])

  return (
    <tbody>
      {todos?.map((todo) => {
        const formattedDate = convertParseISODate(todo.createdAt!)

        return (
          <Fragment key={todo._id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className={`${todo.done ? 'line-through' : ''} px-6 py-4`}>
                {todo.description}
              </td>
              <td className="px-6 py-4">
                {todo.done ? (
                  <span className="bg-slate-600 py-1 px-6 rounded-sm cursor-auto text-white">
                    Done
                  </span>
                ) : (
                  <span className="bg-yellow-600 py-1 px-6 rounded-sm cursor-auto text-white">
                    Open
                  </span>
                )}
              </td>
              <td className="px-6 py-4">{formattedDate}</td>
              <td className="px-6 py-4">
                <div className="gap-2 flex">
                  <UpdateForm id={todo._id!} disabled={!!todo.done} />
                  <DeleteForm id={todo._id!} disabled={!!todo.done} />
                </div>
              </td>
            </tr>
          </Fragment>
        )
      })}
    </tbody>
  )
}
