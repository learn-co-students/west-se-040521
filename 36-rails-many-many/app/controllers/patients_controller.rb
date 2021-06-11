class PatientsController < ApplicationController\

    before_action :find_patient, only: [:show, :edit, :update]

    def index
        @patients = Patient.all
    end

    def show
    end
    
    def new
        @patient = Patient.new
    end
    
    def create
        @patient = Patient.new(patient_params)
        if @patient.save
            redirect_to @patient
        else
            render :new
        end
    end
    
    def edit
        
    end
    
    def update
        if @patient.update(patient_params)
            redirect_to @patient
        else
            render :edit
        end
    end
    
    private
    
    def patient_params
        params.require(:patient).permit(:name, :condition)
    end
    
    def find_patient
        @patient = Patient.find(params[:id])
    end
end
