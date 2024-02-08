'use client'

import { Fragment, useEffect, useState } from 'react'

import { convertParseISODate } from '@/app/utils/convertParseISODate'
import UpdateButton from '@/app/ui/dashboard/update-button/update-button'
import DeleteForm from './delete-form'

import { Todo } from '@/app/types'

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
                  <UpdateButton id={todo._id!} disabled={!!todo.done} />
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
