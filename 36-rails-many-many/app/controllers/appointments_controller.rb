class AppointmentsController < ApplicationController

    def new
        @appointment = Appointment.new
    end
    
    def create
        @appointment = Appointment.new(appointment_params)
        if @appointment.save
            redirect_to patient_path(@appointment.patient)
        else    
            render :new
        end
    end
    
    def edit
        @appointment = Appointment.find(params[:id])
    end
    
    def update
        @appointment = Appointment.find(params[:id])
        if @appointment.update(appointment_params)
            redirect_to patient_path(@appointment.patient)
        else    
            render :edit
        end
        
    end

    private

    def appointment_params
        params.require(:appointment).permit(:time, :patient_id, :doctor_id)
    end
end
