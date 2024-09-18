import { auth } from "@/auth"
import { response } from "@/lib/utils"

async function updateHandler() {
  return response({ code: 200 })
}

export const PATCH = auth(updateHandler)
