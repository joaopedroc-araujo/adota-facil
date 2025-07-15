import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'
import LoginForm from './components/LoginForm'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const tenant =
    user &&
      Array.isArray(user.tenants) &&
      user.tenants.length > 0 &&
      user.tenants[0] &&
      Array.isArray(user.tenants[0].tenant) &&
      user.tenants[0].tenant.length > 0
      ? user.tenants[0].tenant[0]
      : null;

  if (!user) {
    return (
      <div className="home">
        <LoginForm />
      </div>
    )
  }

  return (
    <div className="home">
      <header>
        {tenant && (
          <div className="tenant-info">
            {tenant.logo && (
              <Image src={tenant.logo.url} alt="Logo da ONG" width={40} height={40} />
            )}
            <span>{tenant.name}</span>
          </div>
        )}
        <span className="user-role">{user?.role && `Papel: ${user.role}`}</span>
      </header>
      <main>
        <h1>
          {`Bem-vindo de volta, ${user.firstName || user.email}!`}
        </h1>
        <div className="links">
          <a href={payloadConfig.routes.admin}>Painel administrativo</a>
          <a href="/animais">Animais</a>
          <a href="/eventos">Eventos</a>
        </div>
      </main>
    </div>
  )
}