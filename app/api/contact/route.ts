import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, asunto, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos" },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Por favor ingresa un email válido" },
        { status: 400 }
      );
    }

    // Aquí podrías integrar con servicios de email como:
    // - SendGrid
    // - Nodemailer
    // - Resend
    // Por ahora, simulamos el envío exitoso
    
    console.log("📧 Nueva consulta recibida:");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Teléfono:", telefono || "No proporcionado");
    console.log("Asunto:", asunto || "Sin asunto");
    console.log("Mensaje:", mensaje);
    console.log("---");

    // Simular un pequeño delay para UX realista
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true, 
        message: "Mensaje enviado correctamente. Nos pondremos en contacto pronto." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en API de contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
