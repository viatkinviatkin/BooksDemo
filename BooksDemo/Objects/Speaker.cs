﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Product_64396
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Speaker.
    /// </summary>
    // *** Start programmer edit section *** (Speaker CustomAttributes)

    // *** End programmer edit section *** (Speaker CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("SpeakerE", new string[] {
            "LastName as \'Last name\'",
            "FirstName as \'First name\'",
            "MiddleName as \'Middle name\'"})]
    [View("SpeakerL", new string[] {
            "LastName as \'Last name\'",
            "FirstName as \'First name\'",
            "MiddleName as \'Middle name\'"})]
    public class Speaker : ICSSoft.STORMNET.DataObject
    {
        
        private string fLastName;
        
        private string fFirstName;
        
        private string fMiddleName;
        
        // *** Start programmer edit section *** (Speaker CustomMembers)

        // *** End programmer edit section *** (Speaker CustomMembers)

        
        /// <summary>
        /// LastName.
        /// </summary>
        // *** Start programmer edit section *** (Speaker.LastName CustomAttributes)

        // *** End programmer edit section *** (Speaker.LastName CustomAttributes)
        [StrLen(255)]
        public virtual string LastName
        {
            get
            {
                // *** Start programmer edit section *** (Speaker.LastName Get start)

                // *** End programmer edit section *** (Speaker.LastName Get start)
                string result = this.fLastName;
                // *** Start programmer edit section *** (Speaker.LastName Get end)

                // *** End programmer edit section *** (Speaker.LastName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Speaker.LastName Set start)

                // *** End programmer edit section *** (Speaker.LastName Set start)
                this.fLastName = value;
                // *** Start programmer edit section *** (Speaker.LastName Set end)

                // *** End programmer edit section *** (Speaker.LastName Set end)
            }
        }
        
        /// <summary>
        /// FirstName.
        /// </summary>
        // *** Start programmer edit section *** (Speaker.FirstName CustomAttributes)

        // *** End programmer edit section *** (Speaker.FirstName CustomAttributes)
        [StrLen(255)]
        public virtual string FirstName
        {
            get
            {
                // *** Start programmer edit section *** (Speaker.FirstName Get start)

                // *** End programmer edit section *** (Speaker.FirstName Get start)
                string result = this.fFirstName;
                // *** Start programmer edit section *** (Speaker.FirstName Get end)

                // *** End programmer edit section *** (Speaker.FirstName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Speaker.FirstName Set start)

                // *** End programmer edit section *** (Speaker.FirstName Set start)
                this.fFirstName = value;
                // *** Start programmer edit section *** (Speaker.FirstName Set end)

                // *** End programmer edit section *** (Speaker.FirstName Set end)
            }
        }
        
        /// <summary>
        /// MiddleName.
        /// </summary>
        // *** Start programmer edit section *** (Speaker.MiddleName CustomAttributes)

        // *** End programmer edit section *** (Speaker.MiddleName CustomAttributes)
        [StrLen(255)]
        public virtual string MiddleName
        {
            get
            {
                // *** Start programmer edit section *** (Speaker.MiddleName Get start)

                // *** End programmer edit section *** (Speaker.MiddleName Get start)
                string result = this.fMiddleName;
                // *** Start programmer edit section *** (Speaker.MiddleName Get end)

                // *** End programmer edit section *** (Speaker.MiddleName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Speaker.MiddleName Set start)

                // *** End programmer edit section *** (Speaker.MiddleName Set start)
                this.fMiddleName = value;
                // *** Start programmer edit section *** (Speaker.MiddleName Set end)

                // *** End programmer edit section *** (Speaker.MiddleName Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "SpeakerE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SpeakerE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SpeakerE", typeof(IIS.Product_64396.Speaker));
                }
            }
            
            /// <summary>
            /// "SpeakerL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View SpeakerL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("SpeakerL", typeof(IIS.Product_64396.Speaker));
                }
            }
        }
    }
}