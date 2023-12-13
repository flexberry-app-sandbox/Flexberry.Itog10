package Itog10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itog10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Услуги
 */
@Entity(name = "IISItog10Услуги")
@Table(schema = "public", name = "Услуги")
public class Uslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZatrVremya")
    @Convert("ZatrVremya")
    @Column(name = "ЗатрВремя", length = 16, unique = true, nullable = false)
    private UUID _zatrvremyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZatrVremya", insertable = false, updatable = false)
    private ZatrVremya zatrvremya;


    public Uslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}