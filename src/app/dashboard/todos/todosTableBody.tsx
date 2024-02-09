'use client'

import { Fragment, useEffect, useState } from 'react'

import { Todo } from '@/app/types'

import DeleteForm from '@/app/dashboard/todos/delete-form'
import UpdateForm from '@/app/dashboard/todos/update-form'
import { convertParseISODate } from '@/app/utils/convertParseISODate'

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
            <tr className="h-[45px]">
              <td className={`${todo.done ? 'line-through' : ''}`}>
                {todo.description}
              </td>
              <td>{todo.done ? 'Done' : 'Open'}</td>
              <td>{formattedDate}</td>
              <td>
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
